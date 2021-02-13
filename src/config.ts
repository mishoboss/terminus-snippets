import { ConfigProvider } from 'terminus-core'

export class QuickCmdsConfigProvider extends ConfigProvider {
    defaults = {
        qc: {
            cmds: []
        },
        hotkeys: {
            'show-quick-cmds': [
                'Alt-Q',
            ],
        },
    }

    platformDefaults = { }
}
