import { FC } from "react";
import reactify from "@quarkd/reactify";
import { Rule } from "quarkd/lib/form";
import { componentBaseInterface } from "../type";

interface FormProps extends componentBaseInterface {}

interface Ref {
  submit: () => Promise<any[]>;
  setRules: (rule: Rule[]) => void;
}
type FormRef = Ref & HTMLElement;
type FormType = FC<FormProps>;
const Form = reactify("quark-form") as FormType;
export { FormRef };
export default Form;
