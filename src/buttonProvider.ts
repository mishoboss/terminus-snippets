import { Injectable } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { HotkeysService, ToolbarButtonProvider, IToolbarButton } from 'terminus-core'
import { QuickCmdsModalComponent } from './components/quickCmdsModal.component'

@Injectable()
export class ButtonProvider extends ToolbarButtonProvider {
    constructor (
        private ngbModal: NgbModal,
        hotkeys: HotkeysService,
    ) {
        super()
        hotkeys.matchedHotkey.subscribe(async (hotkey) => {
            if (hotkey === 'show-quick-cmds') {
                this.activate()
            }
        })
    }

    activate () {
        this.ngbModal.open(QuickCmdsModalComponent)
    }

    provide (): IToolbarButton[] {
        return [{
            icon: require('./icons/hand-sparkles.svg'),
            weight: 5,
            title: 'Snippets',
            touchBarNSImage: 'NSTouchBarComposeTemplate',
            click: async () => {
                this.activate()
            }
        }]
    }
}
