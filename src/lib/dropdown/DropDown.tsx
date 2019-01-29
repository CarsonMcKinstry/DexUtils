import * as React from 'react';
import {
  DropDownButton,
  DropDownItems,
  DropDownContainer,
  DropDownText,
  DropDownIcon,
  IconWrapper,
} from './DropDown.styles';
import { useOutsideClick } from '../hooks/useOutsideClick';
import dropdownArrow from '../icons/down.svg';
import clearIcon from '../icons/clear.svg';

const { useState, useRef } = React;

interface DropDownProps {
  onChange?: (option: string) => void;
  onClear?: () => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const DropDown: React.SFC<DropDownProps> = ({
  children,
  value,
  placeholder = 'Choose one...',
  onChange,
  onClear,
  disabled,
}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState('');
  const ref = useRef(null);

  useOutsideClick(ref, () => setDropDownOpen(false), dropDownOpen);

  function clearSelection(e: React.MouseEvent<HTMLElement>) {
    if (currentSelection.trim() !== '') {
      e.stopPropagation();
      setCurrentSelection('');
      if (onClear) {
        onClear();
      }
    }
  }

  const dropdownIcon =
    currentSelection === '' || value === '' ? dropdownArrow : clearIcon;
  const iconSize = currentSelection === '' || value === '' ? null : 18;

  return (
    <DropDownContainer>
      <DropDownButton
        title={value || currentSelection || placeholder}
        role="select"
        onClick={() => setDropDownOpen(!dropDownOpen)}
        disabled={disabled}
      >
        <DropDownText>{value || currentSelection || placeholder} </DropDownText>
        <IconWrapper>
          <DropDownIcon
            size={iconSize}
            onClick={clearSelection}
            src={dropdownIcon}
          />
        </IconWrapper>
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
