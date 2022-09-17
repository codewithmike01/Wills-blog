import sys
import json
from jose import jwt
from urllib.request import urlopen 

# Configuration of AUTH0 ACCOUNT
AUTH0_DOMAIN = 'dev-5plhe-yu.us.auth0.com'
ALGORITHMS = ['RS256']
API_AUDIENCE = 'wills-blog'


# Commnicate AUTH Failure

class AuthError(Exception):
  def __init__(self,error,status_code):
    self.error = error
    self.status_code = status_code

# TOKEN GENERATED FROM LOGIN (FOR TEST IF VALID)
# token="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkpPa09kR3laclZsR2ZORFNpSlhtUyJ9.eyJpc3MiOiJodHRwczovL2Rldi01cGxoZS15dS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjMxOWI5YzZmNTgyOGY2Zjk1NDY3MDQ4IiwiYXVkIjoid2lsbHMtYmxvZyIsImlhdCI6MTY2MjY0MjcyNCwiZXhwIjoxNjYyNjQ5OTI0LCJhenAiOiJaSlVKYnh1dFlDMmoxcXdBaXNlczlFb3V2WUN0eGFxayIsInNjb3BlIjoiIn0.LIWSYki9ZnMtZuB8n01UdnRQOIgCZasGjrr33Ulnfhi5yI0enmfqReWdkqziUK1ExEmy-j5AVCNFNO6ZEMGvgOyVJtAQOkdvi5ey9FpvY2ZyUo1uKlVeQavNu6rL5YfwvMPR4isfTmgeQyj87hbvHf2gT5yaZGBO2JtvedOcOsu_S9N10dh2KyZW0lseHVfF4HANUU4jog3r8QcgkUCT29BkecYMLa7gpb3MissZFWOZnHoiS38pNScfV2fnVbqCzMMeKl3YdSrIB6pgW58dKEh_pFzJWBMsGr4WeCv3UslOXnR8gsOibscdRXjJWl74-etNUL6S0_8MjIqntYOFwg"

# Auth Header

def verify_decode_jwt(token):
  # GET THE PUBLIC KEY FROM AUTH0
  jsonurl = urlopen(f'https://{AUTH0_DOMAIN}/.well-known/jwks.json')
  jwks = json.loads(jsonurl.read())

  # GET THE DATA IN THE HEADER
  unverified_header = jwt.get_unverified_header(token)
  
  # CHOOSE OUR KEY
  rsa_key = {}
  if 'kid' not in unverified_header:
    raise AuthError({
      'code': 'invalid_header',
      'description': 'Authorization malformed.'
    }, 401)

  for key in jwks['keys']:
    if key['kid'] == unverified_header['kid']:
      rsa_key ={
        'kty': key['kty'],
        'kid':key['kid'],
        'use': key['use'],
        'n': key['n'],
        'e':key['e']
      }
    
  #  Finally Verify!!!  
  if rsa_key:
    try:
      # USE THE KEY TO VALIDATE THE JWT
      payload = jwt.decode(
        token,
        rsa_key,
        algorithms=ALGORITHMS,
        audience=API_AUDIENCE,
        issuer='https://' + AUTH0_DOMAIN + '/'
      )
      print('Verified')
  
      return payload

    except jwt.ExpiredSignatureError:
      raise AuthError({
        'code': 'token_expired',
        'description': 'Token expired'
      }, 401)

    except jwt.JWTClaimsError:
      raise AuthError({
        'code': 'invalid_claims',
        'description': 'Incorrect claims. Please check the audience and issure'
      }, 401)
    
    except Exception:
      raise AuthError({
        'code': 'invalid_header',
        'description': 'Unable to parse authentication token.'
      }, 400)
    
  raise AuthError({
    'code':'invalid_header',
    'description':'Unable to find the appropraite key'
  },400)


