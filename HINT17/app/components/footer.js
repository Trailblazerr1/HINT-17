    <View style={styles.container}>
    <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPassChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>


            <Button 
                style={styles.btnStyle}
                title="Log In"
                color="#841584"
                onPress={this.onButtonPress.bind(this)}
            />

            <Button 
                style={styles.btnStyle}
                title="Sign Up"
                color="#F44336"
                onPress={() => Actions.signUp()}
            />
    </Card>
    </View>


                <View style={styles.viewStyle} >
                <View style={styles.btnView}>
                    <Button 
                        style={styles.moneyStyle} 
                        title="Money"
                        color="#F44336"
                        onPress={() => Actions.moneyForm()}
                    />
                    <Button
                        style={styles.kindStyle} 
                        title="Kind"
                        color="#F44336"
                        onPress={() => Actions.kindForm()}
                    />
                </View>
            </View>



 return (
        <Image source={{ uri: 'http://www.refilwe.org/wp-content/uploads/rankingclass.com-charity-donation.jpg' }} style={styles.imgBack}>
            <Card>
                <CardSection>
                  <Input
                    label="Type"
                    placeholder="Clothings, Food, Books"
                    onChangeText={this.onButtonPress1.bind(this)}
                    value={this.props.typee}
                  />
                </CardSection>

                <CardSection>
                  <Input
                    label="Description"
                    placeholder="For children"
                    onChangeText={this.onButtonPress2.bind(this)}
                    value={this.props.descriptionn}
                  />
                </CardSection>

                <CardSection>
                  <Input
                    label="Amount"
                    placeholder="10"
                  />
                </CardSection>
            </Card>
                    <Button 
                        title="Donate"
                        color="#F44336"
                        onPress={this.onButtonPress3.bind(this)}
                    />
    </Image>
            );



         return (
        <Image source={{ uri: 'http://www.refilwe.org/wp-content/uploads/rankingclass.com-charity-donation.jpg' }} style={styles.imgBack}>
            <Card>
                <CardSection>
                  <Input
                    label="Amount"
                    placeholder="Rupees 1000"
                    onChangeText={this.onButtonPress1.bind(this)}
                    value={this.props.typee}
                  />
                </CardSection>

                <CardSection>
                  <Input
                    label="Description"
                    placeholder="For children"
                    onChangeText={this.onButtonPress2.bind(this)}
                    value={this.props.descriptionn}
                  />
                </CardSection>

            </Card>
                    <Button 
                        title="Donate"
                        color="#F44336"
                        onPress={this.onButtonPress3.bind(this)}
                    />
    </Image>
            );


                        <Card >
                        <CardItem style={{ justifyContent: 'space-around' }}>
                                <Thumbnail source={{ uri: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png' }} />
                                <Body style={{ paddingLeft: 35 }}>
                                    <H3 style={{ padding: 7 }}>
                                      SH
                                    </H3>
                                    <Text style={{ padding: 7 }}>
                                        BS
                                    </Text>
                                </Body>
                        </CardItem>
                    </Card>




              <Card style={{ opacity: 0.9 }}>
                <CardItem  style={{ justifyContent: 'space-between', paddingTop: 1, paddingBottom:1 }}>
                        <Text>
                            {data.to}                                     
                        </Text>
                      <Button transparent>
                          <Icon active name="thumbs-up" />
                          <Text>{data.status}</Text>
                      </Button>
                </CardItem>
                <CardItem content style={{ justifyContent: 'space-between', paddingTop: 1 }}>
                        <Text>
                            {data.date}                                    
                        </Text>
                        <Text>
                            5 pm
                        </Text>
                </CardItem>
            </Card>