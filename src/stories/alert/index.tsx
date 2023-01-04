import React from 'react'
import { useSelector } from 'react-redux'
import Box from '../Box'
import { SiliconButton } from '../button/index'
import { defaultTheme } from '../config/theme'
import { UIRootState } from '../providers/store'
import { SiliconText } from '../text'
import { useAlert } from './useAlert'

const Alert: React.FC = () => {
  const alert = useAlert()
  const alertState = useSelector((state: UIRootState) => state.alertReducer)

  const handleConfirm = React.useCallback(() => {
    alert.close()
  }, [alert])

  if (!alertState.isOpen) {
    return null
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      bottom={0}
      right={0}
      backgroundColor='backgroundOverlay'
      alignItems="center"
      justifyContent="center"
      zIndex={1000}
    >
      <Box
        width={'312px'}
        px={'30px'}
        py={'24px'}
        boxShadow={defaultTheme.shadow.small}
        backgroundColor='backgroundColor'
        borderRadius={defaultTheme.radius.medium}
      >
        <SiliconText
          variant='title'
          fontWeight="bold"
          text={alertState.title}
        />
        <Box mt={'16px'}>
          <SiliconText
            variant='body'
            fontWeight="medium"
            text={alertState.message}
          />
        </Box>
        <Box mt='24px' alignItems='center'>
            <SiliconButton
                text={alertState.okText}
                width='100%'
                onPress={() => {
                    if (alertState.onOk) alertState.onOk()
                    else handleConfirm()
                }}
            />
        </Box>
        {alertState.cancelText ? (
            <Box mt='15px' alignItems='center'>
                <SiliconButton
                    text={alertState.cancelText}
                    variant='text'
                    onPress={() => {
                        if (alertState.onCancel) alertState.onCancel()
                        else handleConfirm()
                    }}
                />
            </Box>
        ) : null}
      </Box>
    </Box>
  )
}

export default Alert
