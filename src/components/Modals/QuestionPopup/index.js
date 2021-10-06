import React, { Component } from "react";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal,
} from "react-native";

import { HIDE_QUESTION_POPUP } from "../../../actionsTypes";
import { makeAction } from "../../../makeAction";
import Button from "../../../components/Button";
import i18n from "../../../services/i18next";

import { styles } from "./styles";


class QuestionPopup extends Component {


  modalClose = () => {
    this.props.makeAction(HIDE_QUESTION_POPUP);
  };

  clickOk = () => {
    const { callback } = this.props.questionPopup;
    this.modalClose();
    if (callback) {
      callback();
    }
  };

  clickCancel = () => {
    this.modalClose();
  };

  timedMode = () => {
    const { callback } = this.props.questionPopup;
    this.modalClose();
    if (callback) {
      callback("timedMode");
    }

  };

  unTimedMode = () => {
    const { callback } = this.props.questionPopup;
    this.modalClose();
    if (callback) {
      callback("unTimedMode");
    }

  };


  render() {
    const { questionPopup } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={questionPopup.visibility}
      >
        <LinearGradient style={styles.modalContain}
                        colors={["#241920", "rgba(36, 25, 32, 0.75)"]}
                        angle={335}
        >
          <View style={styles.squareContain}>
            <Image source={require("../../../assets/images/mask.png")}
                   style={styles.squareBackground} />
            {
              questionPopup.image ?
                <Image style={styles.icon}
                       source={questionPopup.image} />
                : null
            }
            {questionPopup.type === "vertical" ? (
              <>
                <View style={styles.textBox}>
                  <Text style={styles.text}>
                    {questionPopup.text}
                  </Text>
                </View>
                <View>
                  <View style={styles.buttonBox}>
                    <Button
                      width={200}
                      height={60}
                      onPress={this.timedMode}
                      text={i18n.t("buttons.timedMode")}
                    />
                  </View>
                  <View>
                    <Button
                      width={200}
                      height={60}
                      onPress={this.unTimedMode}
                      text={i18n.t("buttons.untimedMode")}
                    />
                  </View>


                </View>
              </>
            ) : (
              <>
                <View style={styles.textBox}>
                  <Text style={styles.text}>
                    {questionPopup.text}
                  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Button
                    onPress={this.clickCancel}
                    text={i18n.t("words.no")}
                  />
                  <Button
                    onPress={this.clickOk}
                    text={i18n.t("words.yes")}
                  />

                </View>
                <TouchableHighlight style={styles.modalClose} onPress={this.modalClose}>
                  <Image style={styles.closeImage}
                         source={require("../../../assets/images/close.png")} />
                </TouchableHighlight>
              </>
            )}
          </View>
        </LinearGradient>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  questionPopup: state.modalReducer.questionPopup,
  game: state.gameReducer.game,
});

const mapDispatchToProps = {
  makeAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionPopup);
