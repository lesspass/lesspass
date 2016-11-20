import math


def renderPassword(mdp, quotient, alphabet):
    if len(mdp) > 14:
        return mdp
    quotient, remainder = divmod(quotient, len(alphabet))
    mdp += alphabet[remainder]
    return renderPassword(mdp, quotient, alphabet)


alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
print(renderPassword('', int('dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e', 16), alphabet))

max_length = math.floor(math.log(int('dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e', 16))/math.log(26 + 26 + 10 + 32)) - 4
print('max number of char for password with 32 bytes entropy: %d' % max_length)
