import static org.junit.Assert.*;
import org.junit.Test;

import java.util.Map;
import java.util.HashMap;

import com.lesspass.Crypto;

public class CryptoTest {
    @Test
    public void testPbkdf2() {
        String password = "password";
        String salt = "example.orgcontact@example.org1";
        String result = new Crypto().pbkdf2(password, salt, 100000, 32);
        assertEquals("dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e", result);
    }

    @Test
    public void testPbkdf2WithUnicodeChar() {
        String password = "I ❤ LessPass";
        String salt = "example.org❤1";
        String result = new Crypto().pbkdf2(password, salt, 100000, 32);
        assertEquals("4e66cab40690c01af55efd595f5963cc953d7e10273c01827881ebf8990c627f", result);
    }

    @Test
    public void testHMAC() {
        String result = new Crypto().hmac("password");
        assertEquals("e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e", result);
    }
}