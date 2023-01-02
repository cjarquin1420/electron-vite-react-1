import React from 'react'
import { BoxComponent, UtilitiesScreen } from '../../stories';
import { useBackup } from '../../lib'
import { sleep } from '../../utils';

const MainScreen: React.FC = () => {
  const [commands, setCommands] = React.useState<Array<string>>([])
  const [lastCommand, setLastCommand] = React.useState<string>('')
  const tempCommands = React.useMemo(() => {
    const value: Array<string> = [
      ...commands,
      lastCommand
    ]

    return value
  }, [lastCommand])

  React.useEffect(() => {
    setCommands(tempCommands)
  }, [tempCommands])

  const backupUitls = useBackup({
    onSentMessage: (message) => {
      setLastCommand(message)
    }
  })

  return (
    <BoxComponent alignItems='center'>
      <UtilitiesScreen
        commandList={commands}
        onBackup={async () => {
          setCommands([])
          await sleep(1000)
          backupUitls.execute()
        }}
      />
    </BoxComponent>
  )
}

export default MainScreen;
