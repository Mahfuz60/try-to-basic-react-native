import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export const Buttons = ({ title }) => {
  return (
    <Pressable onPress={() => alert('Product List Show')}>
      <View
        style={{
          height: 50,
          backgroundColor: 'green',
          margin: 20,
          padding: 10,
          alignItems: 'center',
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default function App() {
  const [count, setCount] = useState(0);
  const pressButton = () => {
    setCount(count + 1);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ color: 'green', backgroundColor: 'yellow', marginTop: 40 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', paddingTop: 10 }}>
            Hello Programming Hero!
          </Text>
        </View>
        <View style={{ backgroundColor: 'tomato', marginTop: 20, padding: 10 }}>
          <Text style={{ fontSize: 20, color: 'white' }}>I am Learning to React Native</Text>
        </View>

        <View>
          <Image
            style={{ height: 180, width: 400, marginTop: 10 }}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_960_720.jpg',
            }}
            resizeMode='contain'
          />
        </View>
        <View style={{ marginLeft: 50 }}>
          <Image
            style={{ height: 300, width: 300, marginTop: 10 }}
            source={{
              uri: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
            }}
            resizeMode='cover'
          />
        </View>

        {/* dynamic Button Component */}

        <Buttons title='Show Product' />
        <Buttons title='Add product' />
        <Buttons title='Delete Product' />
        <Buttons title='Update Product' />

        <View
          style={{
            backgroundColor: 'pink',
            height: 100,
            width: 400,
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Count:{count}</Text>
          <TouchableOpacity onPress={pressButton}>
            <Text
              style={{
                backgroundColor: 'red',
                marginTop: 20,
                padding: 10,
                borderRadius: 15,
                color: 'white',
                fontWeight: 'bold',
                width: 300,
                textAlign: 'center',
                fontSize: 25,
              }}
            >
              Press Me
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            textAlign: 'center',
            marginTop: 10,
            justifyContent: 'center',
            padding: 10,
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 18 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus et voluptatem
            reprehenderit illo natus, porro error hic incidunt ex, nihil, voluptates veritatis culpa
            pariatur asperiores? Cum omnis esse ipsa natus obcaecati accusantium ipsam est! Commodi
            adipisci harum iusto nesciunt fugit! Omnis eum cumque dolorum, delectus impedit
            dignissimos voluptatem distinctio minus commodi est reiciendis ipsum sit laboriosam
            ducimus et corrupti expedita, incidunt aut? Fugit impedit esse porro ab hic enim
            adipisci eveniet. Quam officiis quas a, ratione quasi eveniet recusandae saepe
            repudiandae! Consequuntur expedita quisquam in provident architecto distinctio vitae
            laboriosam illo nisi doloribus dicta, assumenda dolor ad aut dolores nulla optio vel non
            autem! Commodi, deleniti! Vel ex nostrum doloribus quaerat vero, ea cupiditate
            laboriosam deleniti voluptatibus quasi commodi tempora doloremque rem enim, adipisci
            quae cumque sunt quia. Reprehenderit veritatis aliquam ipsa exercitationem, eum corporis
            quisquam voluptates odit ullam. Id, nostrum sit ducimus autem exercitationem officiis
            placeat magnam veritatis eveniet cum, laudantium iure quibusdam, minus temporibus ipsa
            aut consequuntur fugiat quod unde dolorem! Est temporibus dolorum totam. Similique esse
            ipsum libero vero minima tenetur voluptate dolorum officia quos quisquam odit deleniti
            explicabo mollitia nesciunt impedit veritatis obcaecati reiciendis doloremque maiores
            doloribus, corporis architecto odio fugiat? Sint corporis unde ex nulla necessitatibus
            molestiae, ullam laborum veniam ab ipsum soluta veritatis eum officiis vel error illo
            adipisci dolorem fuga iure illum tenetur iste aspernatur commodi! Error in laudantium
            cumque nostrum sunt ea cupiditateus quod sit dicta veritatis voluptas. Libero earum vero
            amet tenetur accusantium in ipsum laboriosam assumenda eum enim omnis, quibusdam ex,
            dolore impedit. Laborum!
          </Text>
        </View>

        <Button
          title='Click More'
          style={{ margin: 20, padding: 10 }}
          onPress={() => alert('simple Button Press It!')}
          color='black'
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
