import PasswordGenerationForm from "./passwordGeneration/PasswordGenerationForm";

export default function PasswordGenerationPage() {
  return (
    <div>
      <PasswordGenerationForm onSubmit={console.log} />
    </div>
  );
}
