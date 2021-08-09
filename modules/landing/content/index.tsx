// type
import { GalaxyLeftType } from '@md-modules/shared/types/landing';
// components
import { GalaxyLeft } from './components/galaxyLeft';
import { Pages } from '../constants';
// views
import {
  WrapperContentPage,
  TextTwoContentPage,
  TextOneContentPage,
  TextTitleContentPage,
  WrapperContentPageGrid,
  RightContainer,
  ButtonArrowContentPage,
  ContainerContentPage
} from './views';

export const ContentPage = ({ scroll, workspaceHeight, isRender }: GalaxyLeftType) => {
  const textButtonArrow = 'VIEW PROJECT';

  return (
    <>
      {Pages.map((page) => {
        return (
          <WrapperContentPage
            key={page.id}
            backgroundColorFirst={page.backgroundColorFirst}
            backgroundColorSecond={page.backgroundColorSecond}
          >
            <WrapperContentPageGrid>
              <GalaxyLeft scroll={scroll} workspaceHeight={workspaceHeight} isRender={isRender} />
              <ContainerContentPage>
                <TextTitleContentPage>{page.textTitle}</TextTitleContentPage>
                <TextOneContentPage>{page.text.textOne}</TextOneContentPage>
                <TextTwoContentPage>{page.text.textTwo}</TextTwoContentPage>
                <ButtonArrowContentPage>{textButtonArrow}</ButtonArrowContentPage>
              </ContainerContentPage>
              <RightContainer background={page.background} />
            </WrapperContentPageGrid>
          </WrapperContentPage>
        );
      })}
    </>
  );
};
