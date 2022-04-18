export const queries = {

  searchSegment: async (
    __: unknown, 
    args: SearchSegmentInput, 
    context: Context
  ) => {

    const { parameter, parameterValue } = await context.clients.apps.getAppSettings(
      `${process.env.VTEX_APP_ID}`
    )

    console.log("args", args)

    console.log(`key: ${parameter}, value: ${parameterValue}`)
    
    if(args.isAuthenticated === true){
      const selectedFacets = args.selectedFacets || [];

      if (selectedFacets.length > 0){
        return [{ key: selectedFacets[0].key, value: selectedFacets[0].value }];
      } 
    } 

    return [{ key: parameter, value: parameterValue }];

  }
}