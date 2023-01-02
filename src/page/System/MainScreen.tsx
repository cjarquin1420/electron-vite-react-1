import React from 'react'
import { BoxComponent, UtilitiesScreen } from '../../stories';
import { useBackup } from '../../lib'

const MainScreen: React.FC = () => {
  const backupUitls = useBackup({
    onSentMessage: (message) => {
      console.log(message)
    }
  })
  return (
    <BoxComponent alignItems='center'>
      <UtilitiesScreen
        commandList={[]}
        onBackup={() => {
          backupUitls.execute()
        }}
      />
    </BoxComponent>
  )
}

export default MainScreen;
