import React from 'react';
import { Text, View,  ScrollView,TextInput, StyleSheet, ImageBackground, ToastAndroid, FlatList, RefreshControl} from 'react-native';
import apiServices from '../services/apiServices';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/FontAwesome5';

class Cart extends React.Component{

    


    componentDidMount =async()=>{
      const navigation = this.props.navigation;
      navigation.addListener('focus', async () => {
            console.log("dd")
            this.getCart();
      });
    }


    constructor(props){
        super(props);
        this.state={
            "cart": []
        };
    }


    getCart = async()=>{
        console.log("heree")
        var response = await apiServices.GetRequest({}, 'cart');
        this.setState({'cart' : response})
    }



    renderItem = (cart) => (
        <View style={{ 'justifyContent': 'center', display: 'flex', 'alignItems': 'center' }}>
            <Card containerStyle={{ 'width': wp('96%'), 'paddingHorizontal': wp('0%') }}>
                <Text style={{ fontSize: wp('3.5%'), fontWeight: 'bold' }}>{cart.item.brand}</Text>
                <View style={{ marginTop: hp('1%') }}>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginTop: hp('1%') }}>
                        <Icons name="inbox" color='#000000' size={50} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                  <Text style={{fontSize:wp('3.5%'),fontWeight:'bold',marginTop:hp('2%'),paddingLeft:wp('5%')}}>Brand Name</Text>
                  <Text style={{fontSize:wp('3.5%'),fontWeight:'bold',paddingLeft:wp('5%')}}>Product court</Text>

                  </View>
                </View>
            </Card>
        </View>
    );

  render() {
      return(   
        <View style={{ 'paddingTop': hp('2%'), height: hp('82%') }}>
            <FlatList
                data={this.state.cart}
                renderItem={item => this.renderItem(item)}
                keyExtractor={(item, index) => String(index)}

            />
        </View>
        
      )
  }
}

export default Cart;

