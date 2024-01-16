import { Group, FromInputLabel, Input } from "./form-input.styles.jsx";

function FormInput(props) {
  const { label, ...otherProps } = props;

  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FromInputLabel shrink={otherProps.value.length}>
          {label}
        </FromInputLabel>
      )}
    </Group>
  );
}

export default FormInput;
