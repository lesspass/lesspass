import unittest
from unittest.mock import patch, MagicMock

from lesspass.fingerprint import get_mnemonic, getpass_with_fingerprint


class TestFingerprint(unittest.TestCase):
    def test_get_fingerprint(self):
        self.assertEqual(get_mnemonic("passwor"), "🏨 🍴 🏁")
        self.assertEqual(get_mnemonic("Password12345"), "🚑 🛏️ 💷")
        self.assertEqual(get_mnemonic("Ma$$W0rld!@#$%^&*()<gamma>"), "📈 💷 💷")


class TestGetpassWithFingerprint(unittest.TestCase):
    """Test keyboard input handling in getpass_with_fingerprint"""

    @patch("lesspass.fingerprint.getchar")
    def test_ctrl_u_clears_password(self, mock_getchar):
        """Test that Ctrl+U clears the password buffer"""
        # Simulate: type "test", then Ctrl+U, then "new", then Enter
        mock_getchar.side_effect = ["t", "e", "s", "t", "\x15", "n", "e", "w", "\r"]
        
        with patch("sys.stdout.write"):
            result = getpass_with_fingerprint("Password: ")
        
        self.assertEqual(result, "new")

    @patch("lesspass.fingerprint.getchar")
    def test_backspace_removes_char(self, mock_getchar):
        """Test that backspace removes the last character"""
        # Simulate: type "test", backspace twice, type "ed", then Enter
        mock_getchar.side_effect = ["t", "e", "s", "t", "\x7f", "\x7f", "e", "d", "\r"]
        
        with patch("sys.stdout.write"):
            result = getpass_with_fingerprint("Password: ")
        
        self.assertEqual(result, "teed")

    @patch("lesspass.fingerprint.getchar")
    def test_ctrl_u_on_empty_password(self, mock_getchar):
        """Test that Ctrl+U on empty password doesn't cause issues"""
        # Simulate: Ctrl+U on empty, then type "password", then Enter
        mock_getchar.side_effect = ["\x15", "p", "a", "s", "s", "w", "o", "r", "d", "\r"]
        
        with patch("sys.stdout.write"):
            result = getpass_with_fingerprint("Password: ")
        
        self.assertEqual(result, "password")

    @patch("lesspass.fingerprint.getchar")
    def test_multiple_ctrl_u_operations(self, mock_getchar):
        """Test multiple Ctrl+U operations in sequence"""
        # Simulate: type "first", Ctrl+U, type "second", Ctrl+U, type "final", Enter
        mock_getchar.side_effect = [
            "f", "i", "r", "s", "t", "\x15",
            "s", "e", "c", "o", "n", "d", "\x15",
            "f", "i", "n", "a", "l", "\r"
        ]
        
        with patch("sys.stdout.write"):
            result = getpass_with_fingerprint("Password: ")
        
        self.assertEqual(result, "final")

    @patch("lesspass.fingerprint.getchar")
    def test_simple_password_entry(self, mock_getchar):
        """Test simple password entry without special keys"""
        mock_getchar.side_effect = ["p", "a", "s", "s", "\r"]
        
        with patch("sys.stdout.write"):
            result = getpass_with_fingerprint("Password: ")
        
        self.assertEqual(result, "pass")

    @patch("lesspass.fingerprint.getchar")
    def test_ctrl_u_clears_display(self, mock_getchar):
        """Test that Ctrl+U properly clears all icons from display"""
        # Simulate: type "password", then Ctrl+U, then Enter
        mock_getchar.side_effect = ["p", "a", "s", "s", "w", "o", "r", "d", "\x15", "\r"]
        
        mock_stdout = MagicMock()
        with patch("sys.stdout.write", mock_stdout):
            result = getpass_with_fingerprint("Password: ")
        
        # Find the call that clears the display (should be clearing spaces)
        calls = mock_stdout.call_args_list
        # The last write before Enter should have clearing spaces for empty password
        last_write_call = calls[-2]  # -1 is the final newline, -2 is the clear
        clear_output = last_write_call[0][0]
        
        # Should contain carriage return and proper spacing to clear icons
        self.assertIn("\r", clear_output)
        # Verify it has enough spaces to clear all 3 icons + 2 spaces between them
        from lesspass.fingerprint import MAX_ICON_WIDTH
        expected_space_count = MAX_ICON_WIDTH * 3 + 2
        self.assertIn(" " * expected_space_count, clear_output)
        # Verify cursor is reset to first position (should end with prompt)
        self.assertTrue(clear_output.endswith("Password: "))
        self.assertEqual(result, "")

    @patch("lesspass.fingerprint.getchar")
    def test_cursor_resets_to_first_position_on_empty(self, mock_getchar):
        """Test that cursor resets to first position when password becomes empty"""
        # Simulate: type "test", Ctrl+U (clears), then Enter
        mock_getchar.side_effect = ["t", "e", "s", "t", "\x15", "\r"]
        
        mock_stdout = MagicMock()
        with patch("sys.stdout.write", mock_stdout):
            result = getpass_with_fingerprint("Master: ")
        
        calls = mock_stdout.call_args_list
        # Find the last clear operation (when password becomes empty)
        empty_clear_call = calls[-2]
        clear_output = empty_clear_call[0][0]
        
        # Cursor should be positioned right after the prompt
        # This is indicated by the output ending with the prompt
        self.assertTrue(clear_output.endswith("Master: "))
        self.assertEqual(result, "")
