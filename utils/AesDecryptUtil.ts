const CryptoJS = require("crypto-js");
import configCred from "@/config/config.json";
export class AesDecryptUtil {
  static privateKey: string;

  static getAesKey() {
    if (AesDecryptUtil.privateKey) return AesDecryptUtil.privateKey;
    AesDecryptUtil.privateKey = configCred.AesPrivateKey;
    return AesDecryptUtil.privateKey;
  }

  static async aesDecrypt(data: string) {
    try {
      let pKey = AesDecryptUtil.getAesKey();
      const bytes = await CryptoJS.AES.decrypt(data, pKey);
      const decryptedData = await JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
