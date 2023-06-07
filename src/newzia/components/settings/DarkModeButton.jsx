import { Switch } from "@headlessui/react"
import { useState } from "react"

export const DarkModeButton = () => {

    const [enabled, setEnabled] = useState(false)

    return (
        <div>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                    enabled ? 'bg-red-ribbon' : 'bg-athens-gray'
                } relative inline-flex h-8 w-[65px] items-center rounded-full`}
            >
                <span className="sr-only">Enable dark-mode</span>
                <span
                    className={`${
                    enabled ? 'translate-x-9' : 'translate-x-1'
                    } inline-block h-6 w-6 transform rounded-full bg-white transition`}
                />
            </Switch>
        </div>
    )
}