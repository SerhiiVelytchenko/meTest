// components
import { LeftContainer } from './components/left-container';
import { Pages } from '../../constants';
// views
import {
  WrapperContainer,
  WrapperContent,
  TextTwoContent,
  TextOneContent,
  TextTitleContent,
  WrapperContainerContent,
  RightContent,
  ButtonArrowContent,
  ContainerContent
} from './views';

export const Content = ({ scrollFactor }: { scrollFactor: number | undefined }) => {
  const textButtonArrow = 'VIEW PROJECT';
  // number of planets in orbit
  const numberOfSections = 3;

  return (
    <WrapperContainer>
      <LeftContainer scrollFactor={scrollFactor} numberOfSections={numberOfSections} />

      {Pages.map((page) => {
        return (
          <WrapperContent
            key={page.id}
            backgroundColorFirst={page.backgroundColorFirst}
            backgroundColorSecond={page.backgroundColorSecond}
          >
            <WrapperContainerContent>
              <ContainerContent>
                <TextTitleContent>{page.textTitle}</TextTitleContent>
                <TextOneContent>{page.text.textOne}</TextOneContent>
                <TextTwoContent>{page.text.textTwo}</TextTwoContent>
                <ButtonArrowContent>{textButtonArrow}</ButtonArrowContent>
              </ContainerContent>
              <RightContent background={page.background} />
            </WrapperContainerContent>
          </WrapperContent>
        );
      })}
    </WrapperContainer>
  );
};
