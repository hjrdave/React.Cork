import xmlToJSON from 'xmltojson';
const useJSON = () => {
    const convertFromXML = (xmlString: string) => {
        return JSON.stringify(xmlToJSON.parseString(xmlString, {}));
    };

    return {
        convertFromXML
    }
};

export default useJSON;