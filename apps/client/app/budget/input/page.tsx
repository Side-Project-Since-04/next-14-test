'use client';

import BudgetDescription from '@/src/widgets/budget/input/BudgetDescription';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import { useToast } from '../../../../../packages/ui/src/Toast';
import { useState } from 'react';
import BudgetHeader from '@/src/widgets/budget/common/BudgetHeader';

export default function BudgetInputPage() {
  const [budget, setBudget] = useState(0);
  const { toast } = useToast();

  const isEnabledSave = budget > 0;

  // TODO
  const saveBudget = () => {
    // api

    toast({
      variant: 'success',
      title: '저장되었습니다.',
    });
  };

  return (
    <main className="h-full">
      <BudgetHeader isEnableSave={isEnabledSave} onSave={saveBudget} />
      <BudgetDescription />
      <BudgetInput budget={budget} onChange={setBudget} />
    </main>
  );
}
