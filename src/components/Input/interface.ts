export interface InputProps {
  label?: string;
  github?: string;
  linkedin?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
