import type { ReactElement, SVGProps } from "react";

export interface Sample {
  _id: string;
  sampleName: string;
  preview: string;
  html: string;
  thumbnail?: string;
}

export interface AvailableComponent {
  id: string;
  name: string;
  icon: string;
  samples?: Sample[];
}

export interface SelectedComponent {
  id: string;
  type: string;
  name: string;
  _id: string;
  // props: { [key: string]: any }; // Flexible for various component props
  htmlContent: string;
}

export interface SelectedInnerElement {
  componentId: string;
  elementId: string;
  classes: string;
  innerText: string;
  tagName: string;
}

export interface LastDeletedElementInfo {
  componentId: string;
  elementId: string;
  outerHTML: string;
  parentElementId: string | null;
  nextSiblingElementId: string | null;
  tagName: string;
}

export interface PreviewModalProps {
  open: boolean;
  onClose: () => void;
  selectedComponents: SelectedComponent[];
}

export interface CodeEditorModalProps {
  htmlContent: string;
  onSave: (newHtml: string) => void;
  onClose: () => void;
  componentName: string;
}

export interface ComponentPropertiesProps {
  component: SelectedComponent;
  onUpdateProps: (
    componentId: string,
    // newProps: { [key: string]: any }
  ) => void;
}

export interface PropertyInputProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface InnerElementPropertiesProps {
  selectedInnerElement: SelectedInnerElement;
  setSelectedInnerElement: React.Dispatch<
    React.SetStateAction<SelectedInnerElement | null>
  >;
  selectedComponents: SelectedComponent[];
  setSelectedComponents: React.Dispatch<
    React.SetStateAction<SelectedComponent[]>
  >;
}

export interface EditorComponentWrapperProps {
  id: string;
  name: string;
  onRemove: (id: string) => void;
  onSelect: (component: SelectedComponent | null) => void;
  isActive: boolean;
  onMove: (id: string, direction: "up" | "down") => void;
  isFirst: boolean;
  isLast: boolean;
  htmlContent: string;
  onSave: (id: string, html: string) => void;
  onInnerElementSelect: (
    componentId: string,
    elementId: string,
    classes: string,
    tagName: string
  ) => void;
  selectedInnerElementId: string | null;
}

export interface PropertyWrapperProps {
  // Element restoration props
  handleInnerElementRestore: () => void;

  // Inner Element properties props
  selectedInnerElement: SelectedInnerElement | null;
  setSelectedInnerElement: React.Dispatch<
    React.SetStateAction<SelectedInnerElement | null>
  >;

  // AI Assistant Props
  activeComponent: SelectedComponent | null;
  selectedComponents: SelectedComponent[];
  setSelectedComponents: React.Dispatch<
    React.SetStateAction<SelectedComponent[]>
  >;
}

export interface DeleteElementProps {
  componentId: string;
  elementId: string;
  selectedComponents: SelectedComponent[];
  setSelectedComponents: React.Dispatch<
    React.SetStateAction<SelectedComponent[]>
  >;
  setSelectedInnerElement: React.Dispatch<
    React.SetStateAction<SelectedInnerElement | null>
  >;
}

export interface ActiveResponsivenessTypes {
  id: number;
  value: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  width: string;
  name: string;
}