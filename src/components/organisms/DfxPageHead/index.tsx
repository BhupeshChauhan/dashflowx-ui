interface iDfxPageHead {
    title: string;
    description: string;
    actions: JSX.Element;
  variant: 'basic';
}

export function DfxPageHead({ title, description, actions }: iDfxPageHead) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">{actions}</div>
    </div>
  );
}
