import React from 'react'
import { BoxComponent, UtilitiesScreen } from '../../stories';
import { useBackup } from '../../lib'
import Swal from "sweetalert2"

const MainScreen: React.FC = () => {
  const [commands, setCommands] = React.useState<Array<string>>([])
  // const [lastCommand, setLastCommand] = React.useState<string>('')
  // const tempCommands = React.useMemo(() => {
  //   const value: Array<string> = [
  //     ...commands,
  //     lastCommand
  //   ]

  //   return value
  // }, [lastCommand])

  // React.useEffect(() => {
  //   setCommands(tempCommands)
  // }, [tempCommands])

  const backupUitls = useBackup()

  const quitAlert = () => {
    Swal.fire({
      title: "Are you sure you want to exit?",
      text: "You will terminate the program!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#474E68",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        window.close();
      }
    });
  };

  return (
    <BoxComponent alignItems='center'>
      <UtilitiesScreen
        commandList={commands}
        onBackup={async () => {
          const result = await backupUitls.execute()
          setCommands(result.commands)
        }}
        onExit={() => quitAlert()}
      />
    </BoxComponent>
  )
}

export default MainScreen;
