import React from 'react'
import { BoxComponent, useAlert, UtilitiesScreen } from '../../stories';
import { useBackup } from '../../lib'

const MainScreen: React.FC = () => {
  const backupUitls = useBackup()
  const alert = useAlert()

  const [commands, setCommands] = React.useState<Array<string>>([])

  const quitAlert = () => {
    alert.open({
      title: "Are you sure you want to exit?",
      message: "You will terminate the program!",
      okText: "Done",
      cancelText: "cancel",
      onOk: () => {
        window.close()
      },
    })
  };

  return (
    <BoxComponent alignItems='center'>
      <UtilitiesScreen
        commandList={commands}
        onBackup={async () => {
          setCommands([])
          const result = await backupUitls.execute()
          setCommands(result.commands)
        }}
        onExit={() => quitAlert()}
      />
    </BoxComponent>
  )
}

export default MainScreen;
