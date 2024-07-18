export const formatDate = (date,config) =>{
    const defaultOptions = { day:"numeric", month:"short ", year :"numeric"};
    const optioms = config ? config :defaultOptions;

    return new Date(date).toLocaleDateString ("en-US", options);
};