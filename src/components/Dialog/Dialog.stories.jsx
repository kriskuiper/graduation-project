import {
  DialogRoot,
  DialogContent,
  DialogTrigger,
  DialogCloseButton
} from './Dialog';

export default {
  component: DialogRoot,
  subcomponents: {
    DialogContent,
    DialogTrigger,
    DialogCloseButton,
  },
  title: '02. Components/Dialog',
}

export const Default = () => (
  <DialogRoot dialogId="logiq-dialog-1">
    <DialogTrigger>
      Open the dialog
    </DialogTrigger>

    <DialogContent>
      <DialogCloseButton>
        Close
      </DialogCloseButton>

      <p>Some content</p>
    </DialogContent>
  </DialogRoot>
)

export const Styled = () => (
  <DialogRoot>
    <DialogTrigger>
      Open dialog
    </DialogTrigger>
    <DialogContent style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)' 
    }}>
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 'fit-content',
        height: 'fit-content',
        margin: 'auto',
        zIndex: '1000',
        backgroundColor: 'white',
        padding: '1em',
      }}>
        <DialogCloseButton>
          Close
        </DialogCloseButton>

        Some content
      </div>
    </DialogContent>
  </DialogRoot>
);
