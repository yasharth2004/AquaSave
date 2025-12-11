import React from 'react'

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: any;
}

export const ChartContainer = ({ children, config, ...props }: ChartContainerProps) => (
  <div {...props}>{children}</div>
)

export const ChartTooltip = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>{children}</div>
)

export const ChartTooltipContent = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>{children}</div>
)