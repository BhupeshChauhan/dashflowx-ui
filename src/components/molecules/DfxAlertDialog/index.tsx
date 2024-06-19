import { AlertDailogComp } from "./Varients/Basic";

interface iDfxAlertDialog {
  actionButton: string;
  title: string;
  description: string;
  onCancel: () => void;
  onSubmit: () => void;
  varient: 'basic';
}

export const DfxAlertDialog = ({
  actionButton,
  title,
  description,
  onCancel,
  onSubmit,
  varient
}: iDfxAlertDialog) => {
    if (varient === 'basic') {
      return (
        <AlertDailogComp
          actionButton={actionButton}
          title={title}
          description={description}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      );
    }
  return null
};
