import { defaultPasswordProfile, type PasswordProfile } from "lesspass";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const PasswordGenerationFormSchema = Yup.object()
  .shape({
    site: Yup.string().default(defaultPasswordProfile.site),
    login: Yup.string().default(defaultPasswordProfile.login),
    masterPassword: Yup.string().required(),
    lowercase: Yup.boolean().default(defaultPasswordProfile.lowercase),
    uppercase: Yup.boolean().default(defaultPasswordProfile.uppercase),
    digits: Yup.boolean().default(defaultPasswordProfile.digits),
    symbols: Yup.boolean().default(defaultPasswordProfile.symbols),
    length: Yup.number().default(defaultPasswordProfile.length),
    counter: Yup.number().default(defaultPasswordProfile.counter),
  })
  .test(
    "atLeastOneOptionIsChecked",
    "One of lowercase, uppercase, digits or symbols is required",
    (value) =>
      value.lowercase || value.uppercase || value.digits || value.symbols,
  );

type PasswordGenerationForm = PasswordProfile & { masterPassword: string };

export default function PasswordGenerationForm({
  onSubmit,
}: {
  onSubmit: (values: PasswordProfile, masterPassword: string) => void;
}) {
  const {
    register,
    setFocus,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PasswordGenerationForm>({
    resolver: yupResolver(PasswordGenerationFormSchema),
    defaultValues: defaultPasswordProfile,
  });

  useEffect(() => {
    setFocus("site");
  }, [setFocus]);

  return (
    <div>
      <form
        onSubmit={handleSubmit((values) => {
          const { masterPassword, ...passwordProfile } = values;
          onSubmit(passwordProfile, masterPassword);
        })}
      >
        <div>
          <label htmlFor="site">Site</label>
          <input id="site" {...register("site")} />
        </div>
        <div>
          <label htmlFor="login">Login</label>
          <input id="login" {...register("login")} />
        </div>
        <div>
          <label htmlFor="masterPassword">Master password</label>
          <input
            id="masterPassword"
            type="password"
            {...register("masterPassword")}
          />
        </div>
        <div>
          <fieldset>
            <legend>Options</legend>
            <div>
              <div>
                <input
                  type="checkbox"
                  id="lowercase"
                  {...register("lowercase")}
                />
                <label htmlFor="lowercase">a-z</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="uppercase"
                  {...register("uppercase")}
                />
                <label htmlFor="uppercase">A-Z</label>
              </div>
              <div>
                <input type="checkbox" id="digits" {...register("digits")} />
                <label htmlFor="digits">0-9</label>
              </div>
              <div>
                <input type="checkbox" id="symbols" {...register("symbols")} />
                <label htmlFor="symbols">%!@</label>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="length">Length</label>
                <input id="length" type="number" {...register("length")} />
              </div>
              <div>
                <label htmlFor="counter">Counter</label>
                <input id="counter" type="number" {...register("counter")} />
              </div>
            </div>
          </fieldset>
        </div>
        <div>
          <button type="submit" disabled={!isDirty || !isValid}>
            Generate & Copy
          </button>
        </div>
      </form>
    </div>
  );
}
