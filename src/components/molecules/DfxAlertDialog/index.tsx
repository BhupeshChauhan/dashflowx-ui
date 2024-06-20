import { AlertDailogComp } from './variants/Basic';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/atoms/alert-dialog';

interface iDfxAlertDialog {
  actionButton: string;
  title: string;
  description: string;
  onCancel: () => void;
  onSubmit: () => void;
  variant: 'basic';
}

const DfxAlertDialog = ({
  actionButton,
  title,
  description,
  onCancel,
  onSubmit,
  variant,
}: iDfxAlertDialog) => {
  if (variant === 'basic') {
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
  return null;
};

export {
  DfxAlertDialog,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
};
