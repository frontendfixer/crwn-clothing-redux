import { Group, Input, InputLabel } from './form-input.styles';

const FormInput = ({ label, inputOptions }) => (
  <Group>
    <Input {...inputOptions} />
    {label && (
      <InputLabel shrink={inputOptions.value.length} htmlFor={inputOptions.id}>
        {label}
      </InputLabel>
    )}
  </Group>
);

export default FormInput;
