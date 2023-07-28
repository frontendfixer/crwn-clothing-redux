import { InputHTMLAttributes } from 'react'

import { Group, Input, InputLabel } from './form-input.styles'

type FormInputProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const FormInput = ({ label, ...inputOptions }: FormInputProps) => (
  <Group>
    <Input {...inputOptions} />
    {label && (
      <InputLabel
        shrink={Boolean(
          inputOptions.value &&
            typeof inputOptions.value === 'string' &&
            inputOptions.value.length
        )}
        htmlFor={inputOptions.id}
      >
        {label}
      </InputLabel>
    )}
  </Group>
)

export default FormInput
