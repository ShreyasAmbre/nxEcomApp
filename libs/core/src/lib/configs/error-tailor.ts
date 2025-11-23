import { ErrorTailorConfig } from "@ngneat/error-tailor";


export const errorTailorConfig: ErrorTailorConfig = {
  errors: {
    useValue: {
      required: `This field is required`,
      email: `Email is invalid`,
      minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
      maxlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
      specialCharacter: `No special characters required `,
    }
  }
}
