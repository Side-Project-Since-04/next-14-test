import React from 'react';

import { Progress } from '@ui/shadcn-ui/progress';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui/shadcn-ui/card';
import { HeadLine5 } from '@ui/src/components/HeadLine';
import Icon from '@ui/src/Icon';

const BudgetInfo = () => {
  const value = 12;

  return (
    <Card className="w-[332px] p-10">
      <CardHeader>
        <CardTitle className="">
          <HeadLine5>예산 대비 지출 27% 사용</HeadLine5>
        </CardTitle>
        <CardDescription className="text-[12px]">해당 비율은 총 예산금액/총 지출금액 비율입니다.</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <Progress value={value} />
        <div className="flex bottom-6 px-5 absolute justify-between w-[290px]">
          <span className={``}>지출</span>
          <span className={``}>100,000 원</span>
        </div>
      </CardContent>
      <CardContent className="mt-20 flex justify-between w-full">
        <div className="w-100">
          <div>총 예산 금액</div>
          <div>0원</div>
        </div>
        <div className="flex items-center">
          <Icon name="arrow-right" size={24} />
        </div>
      </CardContent>
      <hr />
      <CardContent className="mt-20 flex justify-between w-full">
        <div className="w-100">
          <div>총 지출 금액</div>
          <div>0원</div>
        </div>
        <div className="flex items-center">
          <Icon name="arrow-right" size={24} />
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetInfo;