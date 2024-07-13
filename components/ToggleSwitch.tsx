'use client'

import { Switch } from '@headlessui/react'
import { useState } from 'react'

interface ToggleSwitchProps {
  Enabled: boolean;
  ToggleEnabled: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({Enabled, ToggleEnabled}) => {
  

  return (
    <Switch
      checked={Enabled}
      onChange={ToggleEnabled}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-[#a8b0aa] p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#a8b0aa]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
      />
    </Switch>
  )
}
export default ToggleSwitch