import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';


class Map extends Component {

  componentDidMount(){

    //this.setState({ colors: this.props.need });
  }  

  map = {
    name: 'map',
    areas: [
      { alt: '1', shape: 'poly', preFillColor: this.props.need[0], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [255,342,41,331,34,314,34,303,40,287,57,277,73,259,105,259,117,265,129,267,132,287,165,286,166,275,262,270,265,279,288,279,291,302,342,299,345,334,322,340,300,363,285,364,291,345,266,342,249,347,235,346,211,352,185,358,41,364,39,351,39,329] },
      { alt: '2', shape: 'poly', preFillColor: this.props.need[1], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [344,319,341,297,291,301,288,278,264,280,263,270,165,274,164,284,131,285,130,265,149,252,161,252,175,237,202,165,205,134,221,140,240,144,253,158,268,165,311,157,340,156,347,165,367,156,397,154,414,157,432,151,452,160,465,150,473,150,474,164,484,172,487,199,449,205,459,273,446,281,443,263,435,257,398,272,396,280,369,290,374,315] },
      { alt: '3', shape: 'poly', preFillColor: this.props.need[2], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [457,212,461,272,489,269,520,277,523,289,579,233,580,216,544,169,512,151,478,150,490,196] },
      { alt: '4', shape: 'poly', preFillColor: this.props.need[3], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [211,400,214,411,204,421,206,566,116,570,89,560,58,558,41,409] },
      { alt: '5', shape: 'poly', preFillColor: this.props.need[4], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [214,413,214,396,224,388,256,390,256,383,278,383,281,367,300,363,324,339,345,336,344,321,374,317,370,291,398,280,398,274,433,259,442,263,445,283,458,278,468,339,450,359,435,367,413,365,379,370,360,367,355,382,344,385,346,401,344,416,333,431,320,428,306,432,300,425,298,403,278,410,278,421,254,423,252,413] },
      { alt: '6', shape: 'poly', preFillColor: this.props.need[5], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [450,360,470,339,463,282,489,273,515,280,521,291,583,235,595,239,616,275,627,278,612,304,612,327,624,339,639,350,639,363,628,356,617,356,622,391,611,405,589,406,551,362,534,371,505,373,463,367] },
      { alt: '7', shape: 'poly', preFillColor: this.props.need[6], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [298,405,278,412,278,423,253,425,252,413,215,415,204,425,208,568,112,573,88,563,58,561,58,593,66,659,80,717,233,723,253,700,226,697,218,675,220,644,307,645,308,636,329,648,340,621,352,608,387,593,388,587,361,586,358,546,338,527,324,524,318,511,328,502,345,450,335,432,321,430,306,434,298,425] },
      { alt: '8', shape: 'poly', preFillColor: this.props.need[7], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [449,361,434,367,413,364,379,370,359,366,357,382,345,386,335,430,345,451,332,499,320,511,327,522,359,544,362,584,389,586,398,601,438,566,440,541,460,495] },
      { alt: '9', shape: 'poly', preFillColor: this.props.need[8], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [505,378,508,434,523,436,525,484,536,506,521,543,520,575,543,649,485,669,457,662,450,667,442,650,449,615,454,608,455,592,426,588,439,570,459,501,454,367] },
      { alt: '10', shape: 'poly', preFillColor: this.props.need[9], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [424,723,435,674,456,665,486,668,546,648,522,573,521,541,536,500,525,481,524,436,512,432,507,375,534,373,547,364,586,407,607,405,616,411,642,433,647,478,664,479,665,498,672,518,699,547,674,553,704,575,695,594,711,593,725,607,738,605,749,616,743,630,721,635,719,654,716,669,740,690,729,730,660,687,640,712,642,729,612,720,606,726,588,723,578,729] },
      { alt: '11', shape: 'poly', preFillColor: this.props.need[10], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [418,723,434,675,448,666,439,649,444,620,451,606,451,590,425,590,398,602,385,594,337,623,329,647,308,640,305,645,217,643,222,695,255,701,235,720] },
      { alt: '12', shape: 'poly', preFillColor: this.props.need[10], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [285,364,288,344,253,342,249,346,253,342,235,346,234,352,210,350,210,356,192,353,192,358,40,368,40,394,43,404,213,398,222,388,254,389,254,383,279,383] },
      { alt: '13', shape: 'poly', preFillColor: this.props.need[5], fillColor: 'rgba(150, 138, 0, 0.2)', coords: [707,175,709,160,686,139,690,115,656,49,663,29,686,19,706,26,714,41,731,74,726,95,695,112,708,131,747,119,738,144,756,148,752,162,740,175,724,179] },
    ]
  }
  render() {
    return (
      <div className='map-container'>
        <ImageMapper 
          map = {this.map}
          onClick={area => this.props.selectDistrict(area.alt)}
          width = {400}
          imgWidth = {783}
          src='https://i.imgur.com/yDK9h4z.png'
        />
      </div>
    );
  }
}

export default Map;