import { Button } from '@/components/atoms/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/atoms/alert-dialog';

interface iAlertDailogComp {
  actionButton: string;
  title: string;
  description: string;
  onCancel: () => void;
  onSubmit: () => void;
}

export const AlertDailogComp = ({
  actionButton,
  title,
  description,
  onCancel,
  onSubmit,
}: iAlertDailogComp) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{actionButton}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onSubmit={onSubmit}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
