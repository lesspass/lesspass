import { useFormContext } from "react-hook-form";
import { Input } from "../components/input";
import { Checkbox, CheckboxGroup, CheckboxItem } from "../components/checkbox";
import { Label } from "../components/fieldset";
import { useTranslation } from "react-i18next";

export default function PasswordProfileOptions() {
  const { t } = useTranslation();
  const { register } = useFormContext();

  return (
    <div className="xs:grid-cols-2 grid grid-cols-1 gap-2 sm:gap-4">
      <div>
        <Label>{t("PasswordProfile.Options")}</Label>
        <CheckboxGroup>
          <CheckboxItem>
            <Checkbox id="lowercase" {...register("lowercase")} />
            <Label className="font-mono text-sm" htmlFor="lowercase">
              a-z
            </Label>
          </CheckboxItem>
          <CheckboxItem>
            <Checkbox id="uppercase" {...register("uppercase")} />
            <Label className="font-mono text-sm" htmlFor="uppercase">
              A-Z
            </Label>
          </CheckboxItem>
          <CheckboxItem>
            <Checkbox id="digits" {...register("digits")} />
            <Label className="font-mono text-sm" htmlFor="digits">
              0-9
            </Label>
          </CheckboxItem>
          <CheckboxItem>
            <Checkbox id="symbols" {...register("symbols")} />
            <Label className="font-mono text-sm" htmlFor="symbols">
              %!@
            </Label>
          </CheckboxItem>
        </CheckboxGroup>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="length">{t("PasswordProfile.Length")}</Label>
          <Input id="length" type="number" {...register("length")} />
        </div>
        <div>
          <Label htmlFor="counter">{t("PasswordProfile.Counter")}</Label>
          <Input id="counter" type="number" {...register("counter")} />
        </div>
      </div>
    </div>
  );
}
