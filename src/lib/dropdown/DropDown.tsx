import * as React from 'react';
import {
  DropDownButton,
  DropDownItems,
  DropDownContainer,
} from './DropDown.styles';
import { useOutsideClick } from '../hooks/useOutsideClick';

const { useState, useRef } = React;

interface DropDownProps {
  onChange?: (option: string) => void;
  value?: string;
  placeholder?: string;
}

export const DropDown: React.SFC<DropDownProps> = ({
  children,
  value,
  placeholder = 'Choose one...',
  onChange,
}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState('');
  const ref = useRef(null);

  useOutsideClick(ref, () => setDropDownOpen(false), dropDownOpen);

  return (
    <DropDownContainer>
      <DropDownButton
        title={value || currentSelection || placeholder}
        role="select"
        onClick={() => setDropDownOpen(!dropDownOpen)}
      >
        {value || currentSelection || placeholder}
      </DropDownButton>
      <DropDownItems open={dropDownOpen} ref={ref}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement<any>(child, {
              onClick() {
                const option = (child.props as { children: string }).children;
                setCurrentSelection(option);
                setDropDownOpen(false);
                if (option && onChange) {
                  onChange(option);
                }
              },
            });
          }
          return null;
        })}
      </DropDownItems>
    </DropDownContainer>
  );
};

export { DropDownItem } from './DropDown.styles';
