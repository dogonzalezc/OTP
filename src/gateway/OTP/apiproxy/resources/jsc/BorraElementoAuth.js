var json = JSON.parse(context.getVariable('response.content'));

delete json.EmvUserData;
delete json.EmvTokenData;

context.setVariable("response.content", JSON.stringify(json));

print(json);