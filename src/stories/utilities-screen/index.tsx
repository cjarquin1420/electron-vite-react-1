import React from "react";
import BoxComponent from "../Box";
import { SiliconButton } from "../button/index";
import { MainLayout } from "../main-layout";
import { SiliconText } from "../text";
import Swal from "sweetalert2";

type utilitiesScreenType = {
  onBackup?: () => void;
  onRollback?: () => void;
  onInstall?: () => void;
  onExit?: () => void;
  commandList: Array<string>;
};

export const UtilitiesScreen: React.FC<utilitiesScreenType> = ({
  commandList = [],
  ...props
}) => {
  // const [internalArray, setInternalArray] = React.useState<Array<string>>([])

  // const setData = async (array: Array<string>) => {
  //     const arr: Array<string> = []
  //     for (const el of array) {
  //         arr.push(el)
  //         setInternalArray([
  //             ...arr.filter((x) => x !== el),
  //             el,
  //         ])
  //         await sleep(1000)
  //     }
  // }

  // React.useEffect(() => {
  //     setData(commandList)
  // }, [commandList])
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
    <MainLayout>
      <BoxComponent width="100%" flexDirection="row">
        <BoxComponent flexDirection="row" flex={4}>
          <SiliconButton
            text="backup DBOS"
            variant="outlined"
            onPress={() => {
              if (props.onBackup) props.onBackup();
            }}
          />
          <SiliconButton
            text="Install DBOS"
            variant="outlined"
            ml="20px"
            onPress={() => console.log("press Install DBOS")}
          />
          <SiliconButton
            text="Rollback"
            variant="outlined"
            ml="20px"
            onPress={() => console.log("press Rollback")}
          />
        </BoxComponent>
        <BoxComponent flexDirection="row-reverse" flex={1}>
          <SiliconButton
            text="exit"
            variant="contained"
            onPress={quitAlert}
          />
        </BoxComponent>
      </BoxComponent>
      <BoxComponent height="1px" backgroundColor="disabled" my="20px" />
      <BoxComponent overflowY="auto">
        {commandList.map((comand) => {
          return <SiliconText text={comand} variant="body" />;
        })}
      </BoxComponent>
    </MainLayout>
  );
};
