with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "lesspass-dev-env";
  buildInputs = [
    pkgs.nodejs-12_x
    pkgs.yarn
  ];
}
