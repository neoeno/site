import { type ReactElement } from 'react';

import { Menu, usePlaybackRateOptions } from '@vidstack/react';
// See "Icons" component page for setup before importing the following:
import { ChevronLeftIcon, ChevronRightIcon, OdometerIcon } from '@vidstack/react/icons';

function SpeedSubmenu() {
  const options = usePlaybackRateOptions(),
    hint = options.selectedValue === '1' ? 'Normal' : options.selectedValue + 'x';
  return (
    <Menu.Root>
      <SubmenuButton label="Speed" hint={hint} disabled={options.disabled} icon={OdometerIcon} />
      <Menu.Content className="vds-menu-items">
        <Menu.RadioGroup className="vds-radio-group" value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio className="vds-radio" value={value} onSelect={select} key={value}>
              <div className="vds-radio-check" />
              <span className="vds-radio-label">{label}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

interface SubmenuButtonProps {
  label: string;
  hint: string;
  disabled?: boolean;
  icon: ReactElement;
}

function SubmenuButton({ label, hint, icon: Icon, disabled }: SubmenuButtonProps) {
  return (
    <Menu.Button className="vds-menu-button" disabled={disabled}>
      <ChevronLeftIcon className="vds-menu-button-close-icon" />
      <Icon className="vds-menu-button-icon" />
      <span className="vds-menu-button-label">{label}</span>
      <span className="vds-menu-button-hint">{hint}</span>
      <ChevronRightIcon className="vds-menu-button-open-icon" />
    </Menu.Button>
  );
}
