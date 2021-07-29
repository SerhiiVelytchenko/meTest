import React, { useEffect, useState } from 'react';
// type

// components

// views
import {
  ParalaxContainer,
  Text,
  ParalaxImagest,
  ParalaxLabel,
  ParalaxTitle,
  Parallax,
  ParallaxBody,
  Wrapper,
  TextTitle,
  ParalaxWrapper,
  Button,
  ParalaxImagestLeftPlanet,
  ParalaxImagestRightPlanet,
  ParalaxImagestCultum,
  Content,
  ContentTwo,
  ContentOne,
  ParalaxMenu
} from './views';

export const LandingPage = () => {
  const [isRender, setIsRender] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  let coordXprocent = 0;
  let coordYprocent = 0;
  const forOnePlanet = 1;
  const forTwoPlanet = 0.5;
  const forThreePlanet = 10;

  useEffect(() => {
    setIsRender(true);
  }, []);

  // console.log(isRender)

  const handleMouseMove = (event) => {
    const parallaxWidth = event.currentTarget.offsetWidth;
    const parallaxHeight = event.currentTarget.offsetHeight;

    const coordX = event.pageX / 2;
    const coordY = event.pageY / 2;
    // console.log(coordX);
    // console.log(parallaxWidth);
    coordXprocent = (coordX / parallaxWidth) * 100;
    coordYprocent = (coordY / parallaxHeight) * 100;

    //      console.log(coordXprocent);
    //  console.log(coordYprocent);
    if (isRender) {
      const speed = 0.8;

      const setMouseParallaxStyle = () => {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        setPositionX(positionX + distX * speed);
        setPositionY(positionY + distY * speed);
        // console.log(positionX / forOnePlanet);

        // console.log(positionX);
        // console.log(`transform: translate(${positionX / forOnePlanet}%, ${positionY / forOnePlanet})`);

        // window.requestAnimationFrame(setMouseParallaxStyle);
      };
      setMouseParallaxStyle();
    }
  };

  return (
    <Wrapper>
      <Parallax onMouseMove={handleMouseMove}>
        <ParallaxBody>
          <ParalaxContainer>
            {/* Label */}
            <ParalaxLabel />
            <ParalaxMenu />
          </ParalaxContainer>
          <ParalaxContainer>
            <ParalaxWrapper>
              <ParalaxTitle>
                <TextTitle>Digital experiences that make you shine</TextTitle>
                <Text>Cultum is a digital agency where strategy, creativity and technology converge</Text>
                <div>
                  <Button>hellow</Button>
                  <Button>hellow</Button>
                </div>
              </ParalaxTitle>
            </ParalaxWrapper>

            <ParalaxWrapper>
              <div>
                {/* One planet */}
                <ParalaxImagest>
                  <ParalaxImagestLeftPlanet
                    transform={
                      isRender ? `translate(${positionX / forOnePlanet}%, ${positionY / forOnePlanet}%)` : undefined
                    }
                  />
                </ParalaxImagest>
                {/* Two planet */}
                <ParalaxImagest>
                  <ParalaxImagestRightPlanet
                    transform={
                      isRender ? `translate(${positionX / forTwoPlanet}%, ${positionY / forTwoPlanet}%)` : undefined
                    }
                  />
                </ParalaxImagest>
                {/* Three planet */}
                <ParalaxImagest>
                  <ParalaxImagestCultum
                    transform={
                      isRender ? `translate(${positionX / forThreePlanet}%, ${positionY / forThreePlanet}%)` : undefined
                    }
                  />
                </ParalaxImagest>
              </div>
            </ParalaxWrapper>
          </ParalaxContainer>
        </ParallaxBody>
      </Parallax>
      <Content>
        <ContentOne>
          <ContentTwo>
            Седан: наиболее распространённый тип кузова, может быть двух- или четырёхдверным, в редких исключениях может
            иметь пять дверей (с учётом багажника). Отличительная особенность — наличие двух рядов полноразмерных (то
            есть пригодных для достаточно комфортного размещения взрослых людей) сидений и отсутствие дверцы в задней
            стенке. Представитель — ВАЗ-2101, Toyota Camry. В том числе — двухдверный седан, или (устаревш.) Тудор: от
            купе отличается полноценными двумя рядами сидений и нормальной (как у четырёхдверного седана) базой.
            Представитель — двухдверный «Запорожец». Универсал: обычно двухобъёмный, пяти- или реже трёхдверный
            грузо-пассажирский кузов на основе седана с дверью в задке, задний свес как у седана или длиннее.
            Представители — ВАЗ-2102, ВАЗ-2104, ГАЗ-22, ГАЗ-24-02, Москвич-423, Москвич-426, Москвич-427, ВАЗ-2111,
            ВАЗ-1117, ВАЗ-2171, Lada Largus. Хэтчбэк: обычно двухобъёмный грузо-пассажирский кузов, с тремя или пятью
            дверьми, родственен универсалу, но отличается меньшей длиной заднего свеса, соответственно, менее
            грузоподъёмен. Представители — ВАЗ-2109, Москвич-2141. Купе: двухдверный трёхобъёмный кузов, с одним рядом
            сидений, либо с задним сиденьем ограниченной вместимости (детским, или для краткого, неудобного размещения
            взрослых пассажиров); часто с выраженным спортивным обликом, но встречаются и люксовые (представительские)
            купе, которые обеспечивают максимум комфорта водителю и пассажиру на переднем сиденье. Представитель —
            Cadillac Eldorado. Часто коммерческое название «купе» носят автомобили с другими кузовами, имеющие две
            боковые двери, например, трёхдверные хэтчбэки. Лимузин: закрытый кузов легкового автомобиля высшего класса
            на основе седана с удлинённой колёсной базой и перегородкой за передним сиденьем. Следует отличать от
            простого длиннобазного седана без перегородки. Микроавтобус: название говорит само за себя. Минивэн: обычно
            однообъёмный, либо двухобъёмный с полукапотной компоновкой, кузов, промежуточный вариант между универсалом и
            микроавтобусом. Иногда в отечественной литературе называется УПВ (универсал повышенной вместимости). Может
            обладать сдвижными дверьми для второго ряда сидений. Может быть оборудован третьим рядом сидений.
            Представители — Dodge Grand Caravan, Honda Odyssey, Toyota Sienna. Хардтоп: не отдельный тип, а скорее
            вариант оформления седана, купе, универсала и иных кузовов; хардтоп, как правило, лишён центральной стойки и
            рамок стёкол для лучшего внешнего вида, обзора и вентиляции, что сильно уменьшает жёсткость кузова-хардтопа
            и послужило причиной его редкости начиная с 1980-х годов. Наиболее распространены были хардтоп-модификации
            седанов (как двух-, так и четырёхдверные) и купе. Таун-кар: пассажирский автомобиль с высокой крышей. Обычно
            такой тип кузовов используется в такси. Представитель — MetroCab. Комби: в германоязычных странах так
            называют любой кузов с дверцей в задней стенке, в том числе универсал, хэтчбэк и лифтбэк; в СССР «Комби» был
            назван автомобиль ИЖ-2125, по типу очень близкий к лифтбэку. Лифтбэк: хэтчбэк с длинным, как у седана,
            задним свесом; может иметь два объёма и покатую крышу, как у большинства хэтчбэков, либо три объёма
            («Славута», Škoda Octavia). Фастбэк: относится к различным типам автомобильных кузовов, имеющих особую
            покатую форму крыши, плавно, без ступеньки, переходящей в крышку багажника.
          </ContentTwo>
        </ContentOne>
      </Content>
    </Wrapper>
  );
};
