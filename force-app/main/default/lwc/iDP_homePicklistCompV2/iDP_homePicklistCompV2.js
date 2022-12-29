import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class IDP_homePicklistCompV2 extends NavigationMixin(LightningElement) {
  @track selectedLocation;
  @track selectedMall;
  @track selectedHotel;
  @track showModal = false;
  @track showMalls = false;
  @track showHotels = false;

  locationOptions = [
    { label: 'Malls', value: 'malls' },
    { label: 'Hotels', value: 'hotels' },
  ];

  mallOptions = [
    { label: 'Westend Mall', value: 'westend' },
    { label: 'Phoenix Mall', value: 'phoenix' },
  ];

  hotelOptions = [
    { label: 'Hayat', value: 'hayat' },
    { label: 'Sayatji', value: 'sayatji' },
  ];

  handleLocationChange(event) {
    this.selectedLocation = event.detail.value;
    this.showModal = true;
    this.showMalls = this.selectedLocation === 'malls';
    this.showHotels = this.selectedLocation === 'hotels';
  }

  handleMallChange(event) {
    this.selectedMall = event.detail.value;
  }

  handleHotelChange(event) {
    this.selectedHotel = event.detail.value;
  }

  closeModal() {
    this.showModal = false;
  }

  handlerA(){
    console.log('First Image is clicked ');
    this[NavigationMixin.Navigate]({
      type : 'standard__webPage',
      attributes: {
          url : 'https://www.westendmallpune.com/'
      }
  });
  }

  handlerB(){
    console.log('Second Image is clicked ');
    this[NavigationMixin.Navigate]({
      type : 'standard__webPage',
      attributes: {
          url : 'https://www.westendmallpune.com/'
      }
  });
  }

  handlerC(){
    console.log('Third Image is clicked ');
    this[NavigationMixin.Navigate]({
      type : 'standard__webPage',
      attributes: {
          url : 'https://www.westendmallpune.com/'
      }
  });
  }

  handlerD(){
    console.log('Fourth Image is clicked ');
    this[NavigationMixin.Navigate]({
      type : 'standard__webPage',
      attributes: {
          url : 'https://www.westendmallpune.com/'
      }
  });
  }

  handlerE(){
    console.log('Fifith Image is clicked ');
    this[NavigationMixin.Navigate]({
      type : 'standard__webPage',
      attributes: {
          url : 'https://www.westendmallpune.com/'
      }
  });
  }
}