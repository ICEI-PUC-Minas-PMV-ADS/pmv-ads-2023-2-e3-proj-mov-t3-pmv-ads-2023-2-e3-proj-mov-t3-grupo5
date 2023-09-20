import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
};

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={12}
      bg={variant === "outline" ? "transparent" : "#062D47"}
      borderWidth={variant === "outline" ? 2 : 0}
      borderColor="#818893"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "#4C88B0" : "#335C81",
      }}
      {...rest}
    >
      <Text color="white" fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
