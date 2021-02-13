import { Injectable } from '@angular/core'
import { HotkeyDescription, HotkeyProvider } from 'terminus-core'

/** @hidden */
@Injectable()
export class QuickCmdsHotkeyProvider extends HotkeyProvider {
    hotkeys: HotkeyDescription[] = [
        {
            id: 'show-quick-cmds',
            name: 'Show quick commands window',
        },
    ]

    async provide (): Promise<HotkeyDescription[]> {
        return this.hotkeys
    }
}
