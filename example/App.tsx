import React from 'react';
import { Image, View,Dimensions } from 'react-native';


// @ts-ignore
import Gallery from 'react-native-awesome-gallery';

const imageLeft = { uri: 'babyGirlSmiling400x400' };
const imageRight = { uri: 'babyGirlSmiling400x400' };

const {width} = Dimensions.get("window")
const viewPortHeight = width * 0.92; // 400
const viewPortWidth = width * 0.92; // 400

const App= () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          height: viewPortHeight,
          width: viewPortWidth,
          overflow: 'hidden',
        }}>
        <Gallery
          data={[imageLeft.uri]}
          initialIndex={0}
          containerDimensions={{
            width: viewPortWidth,
            height: viewPortHeight,
          }}
          compareSlider={true}
          leftImage={imageLeft}
          rightImage={imageRight}
          sliderSize={{ width: 70, height: viewPortHeight }}
          SliderComponent={
            <View
              style={{
                width: 3,
                height: viewPortHeight,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}>
              <Image
                source={{ uri: `arrowSwap` }}
                style={{
                  position: 'absolute',
                  height: 56,
                  width: 56,
                }}
              />
            </View>
          }
          showSeparationLine={false}
          separationLineStyles={{
            borderColor: 'red',
            borderWidth: 2,
            backfaceVisibility: 'visible',
          }}
        />
      </View>
    </View>
  );
};

export default App;
