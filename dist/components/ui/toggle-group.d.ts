import { VariantProps } from 'class-variance-authority';
import { toggleVariants } from './toggle';
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
declare function ToggleGroup({ className, variant, size, children, ...props }: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>): React.JSX.Element;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>): React.JSX.Element;
export { ToggleGroup, ToggleGroupItem };
